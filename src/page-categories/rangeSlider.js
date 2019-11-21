import _ from 'lodash';
import store from '../js/store';

console.clear();

class RangeSlider {
  constructor({
    lowValue = 0,
    highValue = 0,
    min = 0,
    max = 200,
    onChange = () => {},
    title = 'Range'
  } = {}) {
    this.rangeSlider = document.createElement('div');
    this.rangeSlider.innerHTML = `
      <div class="values-group">
        <div class="text"><strong>${title}:</strong>
        <input class="value" id="input1" value="${lowValue}" />
        <span> - </span>
        <input class="value" id="input2" value="${highValue}" />
        </div>
      </div>
      <div class="track">
        <div class="thumb thumb-min" id="thumb1"></div>
        <div class="thumb thumb-max" id="thumb2"></div>
        <div class="selection" />
      </div>
    `;

    this.onChange = onChange;
    this.valueRange = [min, max];
    this.scaleValue = this.scaleValue.bind(this);
    this.valueToPosition = this.valueToPosition.bind(this);
    this.getThumbCenter = this.getThumbCenter.bind(this);
    this.setThumbs = this.setThumbs.bind(this);
    this.setSelection = this.setSelection.bind(this);
    this.initTrackDimensions = this.initTrackDimensions.bind(this);
  }

  set lowValue(value) {
    value = parseInt(value);
    this.input1.value = value < this.valueRange[0]
      ? this.valueRange[0]
      : value > this.highValue
      ? this.highValue
      : value;

    this.onChange([this.lowValue, this.highValue]);
  }

  set highValue(value) {
    value = parseInt(value);
    this.input2.value = value > this.valueRange[1]
      ? this.valueRange[1]
      : value < this.lowValue
      ? this.lowValue
      : value;

    this.onChange([this.lowValue, this.highValue]);
  }

  get lowValue() {
    return parseInt(this.input1.value);
  }

  get highValue() {
    return parseInt(this.input2.value);
  }

  scaleValue(value) {
    const { valueRange } = this;
    return (valueRange[1] - valueRange[0]) * value + valueRange[0];
  }

  valueToPosition(value, width) {
    const { valueRange } = this;
    return width * (value - valueRange[0]) / (valueRange[1] - valueRange[0]);
  }


  getThumbCenter(thumb) {
    const { left, width } = thumb.getBoundingClientRect();
    return left + width / 2;
  }

  initTrackDimensions() {
    const track = this.rangeSlider.getElementsByClassName('track')[0];
    const { left: trackStartingX, width: trackWidth } = track.getBoundingClientRect();

    /* Thanks to IE... Instead of:
       Object.assign(this, { trackStartingX, trackWidth, trackEndingX});
       we have this */
    this.trackStartingX = trackStartingX;
    this.trackWidth = trackWidth;
    this.trackEndingX = trackStartingX + trackWidth;
  }

  setThumbs() {
    const {
      thumb1,
      thumb2,
      trackWidth,
      valueToPosition
    } = this;

    thumb1.style.left = `${valueToPosition(this.lowValue, trackWidth)}px`;
    thumb2.style.left = `${valueToPosition(this.highValue, trackWidth)}px`;
  }

  setSelection() {
    const { selection, thumb1, thumb2 } = this;
    selection.style.left = thumb1.style.left;
    selection.style.width = `${parseInt(thumb2.style.left) - parseInt(thumb1.style.left)}px`;
  }

  appendToNode(node) {
    const {
      rangeSlider,
      getThumbCenter,
      setThumbs,
      setSelection,
      scaleValue,
      valueRange,
      getValueWithinLimits,
      initTrackDimensions
    } = this;

    node.appendChild(rangeSlider);

    initTrackDimensions();

    /* Thanks to IE... Instead of:
       [this.thumb1, this.thumb2] = rangeSlider.getElementsByClassName('thumb');
       [this.input1, this.input2] = rangeSlider.getElementsByClassName('value');
       we have this ugliness */

    const thumbs = rangeSlider.getElementsByClassName('thumb');
    const inputs = rangeSlider.getElementsByClassName('value');

    this.thumb1 = thumbs[0];
    this.thumb2 = thumbs[1];
    this.input1 = inputs[0];
    this.input2 = inputs[1];

    this.selection = rangeSlider.getElementsByClassName('selection')[0];


    const moveThumb = (() => {
      const argsCache = {};

      return (selectedThumb, selectedInput) => {
        const selectedThumbId = selectedThumb.getAttribute('id');

        const key = ''.concat(
          selectedThumbId,
          selectedInput.getAttribute('id')
        );

        if (argsCache[key]) return argsCache[key];

        argsCache[key] = event => {
          let newX = event.clientX - this.trackStartingX;
          if (event.clientX > this.trackEndingX) newX = this.trackWidth;
          else if (event.clientX < this.trackStartingX) newX = 0;

          if (
            selectedThumbId === 'thumb1' &&
            event.clientX > this.trackStartingX + thumb2.offsetLeft
          ) newX = getThumbCenter(thumb2) - this.trackStartingX;
          else if (
            selectedThumbId === 'thumb2' &&
            event.clientX < this.trackStartingX + thumb1.offsetLeft
          ) newX = getThumbCenter(thumb1) - this.trackStartingX;

          selectedThumb.style.left = `${newX}px`;

          const updatedValue = Math.round(scaleValue(newX / this.trackWidth));
          if (selectedThumbId === 'thumb1') this.lowValue = updatedValue;
          else this.highValue = updatedValue;

          setSelection();
        };

        return argsCache[key];
      };
    })();

    [
      { thumb: thumb1, input: input1 },
      { thumb: thumb2, input: input2 }
    ].forEach(({ thumb, input }) => thumb.addEventListener('mousedown', e => {
      // To get rid of occasional drag behavior
      e.preventDefault();
      thumb.classList.add('active');
      window.addEventListener('mousemove', moveThumb(thumb, input));
    }));

    window.addEventListener('mouseup', () => {
      [thumb1, thumb2].forEach(thumb => thumb.classList.remove('active'));
      [
        { thumb: thumb1, input: input1 },
        { thumb: thumb2, input: input2 }
      ].forEach(({ thumb, input }) => (
        window.removeEventListener('mousemove', moveThumb(thumb, input))
      ));
    });

    // Listen to input changes
    [input1, input2].forEach((v, i) => v.addEventListener('keypress', e => {
      if (e.keyCode === 13) {
        if (i) this.highValue = e.target.value;
        else this.lowValue = e.target.value;

        setThumbs();
        setSelection();
      }
      else if (
        !e.key.match(/[0-9]/)
        && e.key.length === 1
        && !e.ctrlKey
      ) e.preventDefault();
    }));

    setThumbs();
    setSelection();

    window.addEventListener('resize', initTrackDimensions);

    return this;
  }

  addClass(className) {
    this.rangeSlider.classList.add(className);
    return this;
  }
}

const app = document.getElementById('range-slider');
const rangeSlider = new RangeSlider({
  lowValue: 50,
  highValue: 600,
  max: 1200,
  onChange: _.debounce(((data)=> {
    console.log('data', data)
    store.categoriesFilter.range = data;
  }), 300) // Illustration of subscription
}).appendToNode(app).addClass('slider');


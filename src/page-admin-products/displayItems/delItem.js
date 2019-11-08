import './services';

const actions = {
  EDIT: 'edit',
  DELETE: 'delete'
}

const deleteListItem = element => {

  const parentListItem = element.closest('.item');

  const idAd = parentListItem.dataset.idAd;

  services.deleteAd(idAd)
    .then(() => {

      element.remove(); // удаление из дом дерева (интерфейс)

    })
    .then(
      console.error('success')
    )
    .catch(error => {
      console.error(error);
      
    });
  };


  const handleListClick = ({
    target
  }) => {

    if (target.nodeName !== 'BUTTON') return;

    const action = target.dataset.action;

    switch (action) {
      case actions.DELETE:

        deleteListItem(target);

        break;


      case actions.EDIT:

        break;

    };

  };



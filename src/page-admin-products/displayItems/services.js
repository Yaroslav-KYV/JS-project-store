async getAd(adId) {
  try {
    const result = await this.axios.get(`${this.url}/ads/${adId}`, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return result.data.goal;
  } catch (error) {
    throw new Error(error);
  }
}

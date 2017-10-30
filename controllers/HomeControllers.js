class HomeControlles {
  static async fn (ctx, next) {
    await ctx.render('./index', { title: 'Home' });
  }
}

module.exports = HomeControlles;

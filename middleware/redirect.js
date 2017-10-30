module.exports = async(ctx, next) => {
  await ctx.path === '/' ? ctx.redirect('/home') : await next();
}
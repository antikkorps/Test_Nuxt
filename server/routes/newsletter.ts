export default defineEventHandler((event) => {
  return sendRedirect(event, "my-new-page", 302);
});

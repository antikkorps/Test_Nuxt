export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthenticated = () => {
    return true;
  };
  if (isAuthenticated() === false) {
    return navigateTo("/login");
  }
});

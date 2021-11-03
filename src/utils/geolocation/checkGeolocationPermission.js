export default async function checkGeolocationPermission() {
  const permission = await navigator.permissions.query({
    name: 'geolocation',
  });

  return permission;
}

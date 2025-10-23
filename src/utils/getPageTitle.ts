export function getPageTitle() {
  const currentHour = new Date().getHours();

  if (currentHour < 6) {
    return "You should be sleeping 😴";
  }
  if (currentHour < 12) {
    return "Good Morning!";
  }
  if (currentHour < 18) {
    return "Good Afternoon!";
  }
  if (currentHour < 24) {
    return "Good Evening!";
  }
}

export const sanitizeEmail = (email: string): boolean => {
  if (!email) return false;

  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const userEmail = email;

  return emailRegex.test(userEmail) ? true : false;
};


export const scrollIntoElement = (element: string) =>
{
  document.getElementById(`${element}`)?.scrollIntoView({
    behavior: "smooth",
  });
}
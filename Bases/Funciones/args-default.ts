(() => {
  const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
    if (upper) {
      return `${firstName} ${lastName || "no lastname"}`.toUpperCase();
    } else {
      return `${firstName} ${lastName || "no lastname"}`;
    }
  };

  const name2 = fullName("Tony", "Stark");
  const name = fullName("Tony", "Stark", true);

  console.log({ name2 });
  console.log({ name });
})();

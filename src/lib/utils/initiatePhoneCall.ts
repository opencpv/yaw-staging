const initiatePhoneCall = (phone: string) => {
  location.href = `tel:${phone}`;
};

export { initiatePhoneCall };

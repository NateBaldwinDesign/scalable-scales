const updateLabelValue = (name, value) => {
  // const input = document.getElementById(name)
  const labelValue = document.getElementById(`${name}Value`);
  labelValue.innerHTML = `${value}%`;
};

export default updateLabelValue;

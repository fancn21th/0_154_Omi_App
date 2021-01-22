const data = {
  checked: false,
};

export default data;

export function toggleCheck() {
  data.checked = !data.checked;
}
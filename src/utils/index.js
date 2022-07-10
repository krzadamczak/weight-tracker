export const classNameFunction = ({ isActive }) => (isActive ? "nav-link nav-link--active" : "nav-link");
export const addLeadingZero = (date) => (date < 10 ? `0${date}` : `${date}`);

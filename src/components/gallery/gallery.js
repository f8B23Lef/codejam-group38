import 'bootstrap';
import template from './gallery.template';
import './gallery.css';

export default () => {
  const bodyEl = document.querySelector('body');
  bodyEl.insertAdjacentHTML('afterbegin', template);
};

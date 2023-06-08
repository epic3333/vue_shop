// eslint-disable-next-line
import eventBus from '../eventBus';

export default function gotoPage(pageName, pageParams) {
  eventBus.$emit('gotoPage', pageName, pageParams);
}

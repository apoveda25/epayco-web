import { boot } from 'quasar/wrappers';
import VueRouter from 'vue-router';

let vueRouter: VueRouter;

export default boot(({ router }) => {
  vueRouter = router
});

export { vueRouter };


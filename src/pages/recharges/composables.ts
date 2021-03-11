import { reactive, ref } from '@vue/composition-api';

export const loading = ref(false);

export const pagination = reactive({
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 3,
  rowsNumber: 10
});


export const onRequest = (props) => {
  const { page, rowsPerPage, sortBy, descending } = props.pagination;
  // const filter = props.filter;

  loading.value = true;

  // update rowsCount with appropriate value
  const numberRowsResult = 3;
  pagination.rowsNumber = numberRowsResult;

  // get all rows if "All" (0) is selected
  const fetchCount = rowsPerPage === 0 ? pagination.rowsNumber : rowsPerPage;

  // calculate starting row of data
  const startRow = (page - 1) * rowsPerPage;

  // don't forget to update local pagination object
  pagination.page = page;
  pagination.rowsPerPage = rowsPerPage;
  pagination.sortBy = sortBy;
  pagination.descending = descending;

  // ...and turn of loading indicator
  loading.value = false;
}

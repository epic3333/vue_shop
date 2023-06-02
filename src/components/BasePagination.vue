<template>
    <ul class="catalog__pagination pagination">
      <li class="pagination__item">
        <a class="pagination__link pagination__link--arrow"
           :class="{'pagination__link--disabled': page === fistPage}"
           aria-label="Предыдущая страница"
           href="#"
           @click.prevent="prevPage(page)">
          <svg width="8" height="14" fill="currentColor">
            <use xlink:href="#icon-arrow-left"></use>
          </svg>
        </a>
      </li>
      <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
        <a class="pagination__link"
           :class="{'pagination__link--current': pageNumber === page}"
           @click.prevent="paginate(pageNumber)"
           href="#">
          {{ pageNumber }}
        </a>
      </li>
      <li class="pagination__item">
        <a class="pagination__link pagination__link--arrow"
           :class="{'pagination__link--disabled': page === lastPage}"
           aria-label="Следующая страница"
           href="#"
           @click.prevent="nextPage(page)">
          <svg width="8" height="14" fill="currentColor">
            <use xlink:href="#icon-arrow-right"></use>
          </svg>
        </a>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'BasePagination',
  model: {
    prop: 'page',
    event: 'paginate',
  },
  props: ['page', 'count', 'perPage', 'lastPage', 'fistPage'],
  methods: {
    paginate(page) {
      this.$emit('paginate', page);
    },
    nextPage(page) {
      this.$emit('paginate', page + 1);
    },
    prevPage(page) {
      this.$emit('paginate', page - 1);
    },
  },
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
  },
};
</script>

<style scoped>

</style>

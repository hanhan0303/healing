// 課程列表 start

//分類選單
const $productCategoryMenuItems = $('ul.products-list__nav a');
//下拉式選單
const $productCategorySelect = $('select[name=lesson]');
//排序選單
const $productSortingSelect = $('select[name=sorting]');
//麵包屑的分類項目
const $categoryOfBreadcrumbs = $('.products__nav__breadcrumb p');

$productCategoryMenuItems.on('click', function (e) {
  e.preventDefault();
  const category = $(this).data('category');
  const text = $(this).text();
  renderBreadcrumbs(text);
  renderProductList(category);
  $productCategorySelect.val(category);
});

$productCategorySelect.on('change', function (e) {
  const text = e.target.options[e.target.selectedIndex].innerText;
  renderBreadcrumbs(text);
  renderProductList(e.target.value, $productSortingSelect.val());
});

$productSortingSelect.on('change', function (e) {
  console.log(e);
  renderProductList($productCategorySelect.val(), e.target.value);
});

function renderBreadcrumbs(category = '所有課程') {
  $categoryOfBreadcrumbs.html(category);
}

function renderProductList(category = 'all', sorting = 'launch_time_desc') {
  const $productList = $('ul.products-list__nav');
  const filteredProducts = Products.filter(function (product) {
    return category === 'all' ? true : product.category === category;
  });
  const sortedProducts = filteredProducts.sort(function (a, b) {
    const aLaunchTime = new Date(a.launchTime);
    const bLaunchTime = new Date(b.launchTime);
    if (sorting === 'launch_time_desc') {
      return bLaunchTime - aLaunchTime;
    }

    if (sorting === 'launch_time_asc') {
      return aLaunchTime - bLaunchTime;
    }

    if (sorting === 'views_desc') {
      return b.views - a.views;
    }

    return 0;
  });

  const $products = sortedProducts.map(function (product) {
    return $(`
<li>
		<div><img src="${product.images[0]}" alt="商品圖片" /></div>
		<div>
				<h3>${product.title}</h3>
				<p>${product.description}</p>
				<a href="${product.href}">瞭解更多</a>
		</div>
</li>
`);
  });
  $productList.empty().append($products);
}
renderProductList('all');

// 課程列表 end

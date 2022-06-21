$(document).ready(() => {
  /**
   * Order Content
   */
  const productID = new URLSearchParams(window.location.search).get(
    "product_id"
  );

  const product = Products.find((p) => p.id === productID);

  if (!product) {
    window.location.href = "index.html";
  }

  const typeSetting = TypeSetting[product.category];
  const minAmount = 2;

  const $productTable = $(`
    <table>
      <thead>
        <tr>
          <th><h4>訂單內容</h4></th>
          <th></th>
          <th><h4>人數</h4></th>
          <th><h4>小計</h4></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              src="${product.images[0]}"
            />
          </td>
          <td>
            <h5>${typeSetting.nameText}：${product.title}</h5>
            <p>${typeSetting.dateTimeText}：${product.startTime}</p>
          </td>
          <td>
            <select name="people">
              <option value="2">&thinsp;2</option>
              <option value="3">&thinsp;3</option>
              <option value="4">&thinsp;4</option>
              <option value="5">&thinsp;5</option>
              <option value="6">&thinsp;6</option>
              <option value="7">&thinsp;7</option>
              <option value="8">&thinsp;8</option>
              <option value="9">&thinsp;9</option>
              <option value="10">10</option>
            </select>
          </td>
          <td><span>NT$ ${product.price}</span></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td><span>總計</span></td>
          <td>NT$ <span class="total">${product.price * minAmount}</span></td>
        </tr>
      </tfoot>
    </table>
  `);

  const $totalSpan = $productTable.find("tfoot .total").first();

  $productTable
    .find("select[name=people]")
    .first()
    .on("change", (e) => {
      $totalSpan.html(e.target.value * product.price);
    });

  $(".order-content").append($productTable);

  /**
   * Order Detail
   */
  const $form = $("form.order-form");
  const $submitBtn = $("form.order-form input[type=submit]");
  const $customerPhoneField = $("input[name=customer_phone]");
  const $customerIDField = $("input[name=customer_id]");
  const $customerIDValidIcon = $(".customer-id .is-valid-id");
  const $customerReceiptField = $("input[name=customer_receipt]");

  // Validation
  $customerPhoneField.on("input", function () {
    this.value = this.value.replace(/\D/g, "");
  });
  $customerIDField.on("input", function () {
    this.value = this.value.replace(/\W/g, "");
    if (checkTwID(this.value)) {
      $customerIDValidIcon.css("visibility", "visible");
    } else {
      $customerIDValidIcon.css("visibility", "hidden");
    }
  });
  $customerReceiptField.on("input", function () {
    this.value = this.value.replace(/\D/g, "");
  });
  $form.on("submit", function (e) {
    e.preventDefault();
    const $this = $(this);
    const formData = $this
      .serializeArray()
      .reduce(function (json, { name, value }) {
        json[name] = value;
        return json;
      }, {});
    formData["productID"] = productID;
    window.location.href = `${$this.attr("action")}?formData=${JSON.stringify(
      formData
    )}`;
  });
});

function checkTwID(id) {
  const city = [
    1, 10, 19, 28, 37, 46, 55, 64, 39, 73, 82, 2, 11, 20, 48, 29, 38, 47, 56,
    65, 74, 83, 21, 3, 12, 30,
  ];
  id = id.toUpperCase();
  if (id.search(/^[A-Z](1|2)\d{8}$/i) === -1) {
    return false;
  } else {
    id = id.split("");
    let total = city[id[0].charCodeAt(0) - 65];
    for (let i = 1; i <= 8; i++) {
      total += eval(id[i]) * (9 - i);
    }
    total += eval(id[9]);
    return total % 10 === 0;
  }
}

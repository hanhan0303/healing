$(document).ready(() => {
  /**
   * Order Content
   */
  const rawFormData = new URLSearchParams(window.location.search).get(
    "formData"
  );

  if (!rawFormData) {
    window.location.href = "index.html";
  }
  const formData = JSON.parse(rawFormData);
  const product = Products.find((p) => p.id === formData.productID);
  const typeSetting = TypeSetting[product.category];

  $orderCheck = $(".order-info.order-check");

  const $checkTable = $(`
    <div class="order-info__apply">
      <h4>報名資料確認</h4>
      <ul>
        <li>${typeSetting.nameText}：${product.title}</li>
        <li>${typeSetting.dateTimeText}：${product.startTime}</li>
        <li>課程/遊程天數：1天</li>
        <li>報名人數：${formData.people}</li>
      </ul>
      <hr />
      <ul>
        <li>姓名：${formData.customer_name}</li>
        <li>電話：${formData.customer_phone}</li>
        <li>電子郵件：${formData.customer_email}</li>
        <li>身分證 ID：${formData.customer_id}</li>
      </ul>
    </div>
    <div class="order-info__bank">
      <h4>結帳資料確認</h4>
      <ul>
        <li>銀行名稱：${formData.customer_bank}</li>
        <li>匯款帳戶：${formData.account_number}</li>
        <li>其他備註：${formData.payment_customer_note || "N/A"}</li>
      </ul>
    </div>
  `);

  $orderCheck.append($checkTable);
});


// Mobile
document.addEventListener('DOMContentLoaded', function () {
  // Cho phép nhiều DtmSubmenu hoạt động độc lập
  document.querySelectorAll('.DtmSubmenu').forEach(block => {
    const buttons = block.querySelectorAll('.DtmToggleButton');
    const contents = block.querySelectorAll('.DtmToggleContent');

    buttons.forEach(button => {
      button.addEventListener('click', function (e) {
        e.preventDefault();

        // Xóa trạng thái active ở tất cả nút & nội dung trong cùng block
        buttons.forEach(b => b.classList.remove('DtmToggleButton-Active'));
        contents.forEach(c => c.classList.remove('DtmToggleContent-Active'));

        // Active nút được click
        button.classList.add('DtmToggleButton-Active');

        // Hiện phần nội dung tương ứng
        const target = button.dataset.target;
        const activeContent = block.querySelector('.DtmToggleContent-' + target);
        if (activeContent) activeContent.classList.add('DtmToggleContent-Active');
      });
    });

  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.DtmAccordion-Header').forEach(header => {
    header.addEventListener('click', function () {
      const body = document.getElementById(header.dataset.target);

      // Toggle active class
      header.classList.toggle('active');
      body.classList.toggle('active');
    });
  });
});

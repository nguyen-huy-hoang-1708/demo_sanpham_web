<template>
  <div>
    <h2>Welcome to Football News</h2>
    <p class="title">Đây là trang chuyên cập nhật liên tục tin nhanh bóng đá,lịch thi đấu, kết quả,
       bảng xếp hạng tất cả các giải bóng đá, tin chuyển nhượng,hậu trường cầu thủ. Đây được coi là
        trang web cập nhật tin tức bóng đá nhanh nhất,hấp dẫn nhất hiện nay. Trang web cung cấp cho 
        người hâm mộ những chuyển động nhanh nhất của thể thao trong nước và thể thao quốc tế. Trang
         web cập nhật nhanh kết quả thi đấu,bảng xếp hạng, lịch thi đấu, video bàn thắng... của các 
         giải đấu hàng đầu châu lục và cả các trận bóng trong khuôn khổ Euro, Champion league. Bên cạnh
          đó, trang web đưa những tin mới nhất về chuyển nhượng mùa hè, mùa đông, sa thải hay bổ nhiệm
           huấn luyện viên. Không chỉ khai thác những thông chính từ những đội bóng, câu lạc bộ, ban huấn
            luyện... trang còn cập nhật nhanh nhất, hiệu quả nhất và triệt để nhất những thông tin bên lề
             liên quan đến đời tư của cầu thủ hay tình hình của ban lãnh đạo câu lạc bộ.</p>
  </div>
</template>

<script>
export default {
  name: "HomePage"
};
</script>

<style scoped>
div {
  background-image: url('@/assets/back_ground.PNG'); /* Thay bằng đường dẫn ảnh */
  background-size: cover; /* Phủ kín toàn bộ nền */
  background-position: center; /* Căn giữa ảnh */
  background-repeat: no-repeat; /* Không lặp lại ảnh */
  padding: 20px; /* Tạo khoảng cách bên trong */
  min-height: 100vh; /* Đảm bảo chiều cao tối thiểu */
  color: white; /* Chỉnh màu chữ để dễ nhìn nếu nền tối */
}

h2 {
  text-align: center;
  color:black; /* Màu vàng nổi bật */
}

.title {
  text-align: justify;
  background: rgba(0, 0, 0, 0.6); /* Nền mờ giúp dễ đọc hơn */
  padding: 15px;
  border-radius: 10px;
}
</style>


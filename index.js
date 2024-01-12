function calcAvg(){
    // scope
    // Tìm tới thẻ input có id là avg1
    // let, const
    // let: khai báo 1 biến và có thể cập nhật giá trị
    // const: khai báo biến không cập nhật giá trị được(1 hằng số)
    const resultElement = document.getElementById("result")
    const scoreElement = document.getElementById("score")

    const avg1Element = document.getElementById("avg1");
    const avg1 = Number(avg1Element.value);
   
    // typeof check kiểu dữ liệu

    const avg2Element = document.getElementById("avg2");
    const avg2 = Number(avg2Element.value);

    const avg = (avg1 + avg2*2)/3;


    resultElement.style.display = "block";

    // gọi result xuất hiện
    // cập nhật lại giá trị score
    scoreElement.textContent = avg.toFixed(1);

}
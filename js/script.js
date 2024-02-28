$.ajax({
  url: "https://api.github.com/repos/matstaraldsen/MyFirstRepo",
  success: function (response) {
    console.log(response);
  },
});

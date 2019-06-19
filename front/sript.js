  $(document).on('click', '#buttonSearch', function() {
      var option = $('#selectSearch').val();
      var textCompare = $("#searchText").val();
      var postData = {};
      if (textCompare == '') {
          $.ajax({
              url: 'http://localhost:3000/sanpham/all',
              type: 'GET',
              contentType: 'application/json',
              timeout: 10000
          }).done(data => {
              var dataLength = data.length;
        
              if (dataLength % 2 == 0) {
                
                  var html = '';
                  for (var i = 0; i < dataLength; i = i + 2) {
                      html += `<div class="leftProduct">
                <div id='img` + data[i].Masp + `' class="productImage"></div>
                <div id="inform` + data[i].Masp + `" class="inform">
                    <div class="oneLine">
                        <div class="title">Mã SP: </div>
                        <div class="text">` + data[i].Masp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên SP: </div>
                        <div class="text">` + data[i].Tensp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Mã loại SP: </div>
                        <div class="text">` + data[i].Loaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên loại SP: </div>
                        <div class="text">` + data[i].Tenloaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Giá bán: </div>
                        <div class="text">` + data[i].Giasp + `</div>
                    </div>
                </div>
            </div>

            <div class="rightProduct">
               <div id='img` + data[i + 1].Masp + `' class="productImage"></div>
                <div id="inform` + data[i + 1].Masp + `" class="inform">
                    <div class="oneLine">
                        <div class="title">Mã SP: </div>
                        <div class="text">` + data[i + 1].Masp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên SP: </div>
                        <div class="text">` + data[i + 1].Tensp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Mã loại SP: </div>
                        <div class="text">` + data[i + 1].Loaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên loại SP: </div>
                        <div class="text">` + data[i + 1].Tenloaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Giá bán: </div>
                        <div class="text">` + data[i + 1].Giasp + `</div>
                    </div>
                </div>
            </div>

            <br><br>`;


                  } //end for

                  $('#productDetail').html(html);
              } else {
                  var html = '';
                  for (var i = 0; i < dataLength - 2; i = i + 2) {
                      html += `<div class="leftProduct">
                <div id='img` + data[i].Masp + `' class="productImage"></div>
                <div id="inform` + data[i].Masp + `" class="inform">
                    <div class="oneLine">
                        <div class="title">Mã SP: </div>
                        <div class="text">` + data[i].Masp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên SP: </div>
                        <div class="text">` + data[i].Tensp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Mã loại SP: </div>
                        <div class="text">` + data[i].Loaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên loại SP: </div>
                        <div class="text">` + data[i].Tenloaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Giá bán: </div>
                        <div class="text">` + data[i].Giasp + `</div>
                    </div>
                </div>
            </div>

            <div class="rightProduct">
               <div id='img` + data[i + 1].Masp + `' class="productImage"></div>
                <div id="inform` + data[i + 1].Masp + `" class="inform">
                    <div class="oneLine">
                        <div class="title">Mã SP: </div>
                        <div class="text">` + data[i + 1].Masp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên SP: </div>
                        <div class="text">` + data[i + 1].Tensp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Mã loại SP: </div>
                        <div class="text">` + data[i + 1].Loaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên loại SP: </div>
                        <div class="text">` + data[i + 1].Tenloaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Giá bán: </div>
                        <div class="text">` + data[i + 1].Giasp + `</div>
                    </div>
                </div>
            </div>

            <br><br>`;



                  } //end for
                  html += `<div class="leftProduct">
                <div id='img` + data[dataLength - 1].Masp + `' class="productImage"></div>
                <div id="inform` + data[dataLength - 1].Masp + `" class="inform">
                    <div class="oneLine">
                        <div class="title">Mã SP: </div>
                        <div class="text">` + data[dataLength - 1].Masp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên SP: </div>
                        <div class="text">` + data[dataLength - 1].Tensp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Mã loại SP: </div>
                        <div class="text">` + data[dataLength - 1].Loaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên loại SP: </div>
                        <div class="text">` + data[dataLength - 1].Tenloaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Giá bán: </div>
                        <div class="text">` + data[dataLength - 1].Giasp + `</div>
                    </div>
                </div>
            </div>`;
                  $('#productDetail').html(html);

              }
              for(i = 0;i< dataLength;i++){
                    $('#img'+data[i].Masp).css('background-image',` url('`+data[i].Image+`')`);
                  }

          }).fail(err => {

          })
      } else {
          if (+option == 1) {
        
              postData = {};
              postData.tensanpham = textCompare;
              $.ajax({
                  url: 'http://localhost:3000/sanpham/similarName',
                  type: 'POST',
                  data: JSON.stringify(postData),
                  contentType: 'application/json',
                  timeout: 10000
              }).done(data => {
              
                    var dataLength = data.arr.length;
        
              if (dataLength % 2 == 0) {
                
                  var html = '';
                  for (var i = 0; i < dataLength; i = i + 2) {
                      html += `<div class="leftProduct">
                <div id='img` + data.arr[i].Masp + `' class="productImage"></div>
                <div id="inform` + data.arr[i].Masp + `" class="inform">
                    <div class="oneLine">
                        <div class="title">Mã SP: </div>
                        <div class="text">` + data.arr[i].Masp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên SP: </div>
                        <div class="text">` + data.arr[i].Tensp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Mã loại SP: </div>
                        <div class="text">` + data.arr[i].Loaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên loại SP: </div>
                        <div class="text">` + data.arr[i].Tenloaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Giá bán: </div>
                        <div class="text">` + data.arr[i].Giasp + `</div>
                    </div>
                </div>
            </div>

            <div class="rightProduct">
               <div id='img` + data.arr[i+1].Masp + `' class="productImage"></div>
                <div id="inform` + data.arr[i+1].Masp + `" class="inform">
                    <div class="oneLine">
                        <div class="title">Mã SP: </div>
                        <div class="text">` + data.arr[i+1].Masp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên SP: </div>
                        <div class="text">` + data.arr[i+1].Tensp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Mã loại SP: </div>
                        <div class="text">` + data.arr[i+1].Loaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên loại SP: </div>
                        <div class="text">` + data.arr[i+1].Tenloaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Giá bán: </div>
                        <div class="text">` + data.arr[i+1].Giasp + `</div>
                    </div>
                </div>
            </div>

            <br><br>`;


                  } //end for

                  $('#productDetail').html(html);
                  
              } else {
                  var html = '';
                  for (var i = 0; i < dataLength - 2; i = i + 2) {
                      html += `<div class="leftProduct">
                <div id='img` + data.arr[i].Masp + `' class="productImage"></div>
                <div id="inform` + data.arr[i].Masp + `" class="inform">
                    <div class="oneLine">
                        <div class="title">Mã SP: </div>
                        <div class="text">` + data.arr[i].Masp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên SP: </div>
                        <div class="text">` + data.arr[i].Tensp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Mã loại SP: </div>
                        <div class="text">` + data.arr[i].Loaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên loại SP: </div>
                        <div class="text">` + data.arr[i].Tenloaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Giá bán: </div>
                        <div class="text">` + data.arr[i].Giasp + `</div>
                    </div>
                </div>
            </div>

            <div class="rightProduct">
               <div id='img` + data.arr[i+1].Masp + `' class="productImage"></div>
                <div id="inform` + data.arr[i+1].Masp + `" class="inform">
                    <div class="oneLine">
                        <div class="title">Mã SP: </div>
                        <div class="text">` + data.arr[i+1].Masp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên SP: </div>
                        <div class="text">` + data.arr[i+1].Tensp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Mã loại SP: </div>
                        <div class="text">` + data.arr[i+1].Loaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên loại SP: </div>
                        <div class="text">` + data.arr[i+1].Tenloaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Giá bán: </div>
                        <div class="text">` + data.arr[i+1].Giasp + `</div>
                    </div>
                </div>
            </div>

            <br><br>`;



                  } //end for
                  html += `<div class="leftProduct">
                <div id='img` + data.arr[dataLength -1].Masp + `' class="productImage"></div>
                <div id="inform` + data.arr[dataLength -1].Masp + `" class="inform">
                    <div class="oneLine">
                        <div class="title">Mã SP: </div>
                        <div class="text">` + data.arr[dataLength -1].Masp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên SP: </div>
                        <div class="text">` + data.arr[dataLength -1].Tensp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Mã loại SP: </div>
                        <div class="text">` + data.arr[dataLength -1].Loaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên loại SP: </div>
                        <div class="text">` + data.arr[dataLength -1].Tenloaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Giá bán: </div>
                        <div class="text">` + data.arr[dataLength -1].Giasp + `</div>
                    </div>
                </div>
            </div>`;
                  $('#productDetail').html(html);
                  
              }
              for(i = 0;i< dataLength;i++){
                    $('#img'+data.arr[i].Masp).css('background-image',` url('`+data.arr[i].Image+`')`);
                  }
              }).fail(err => {

              })

          } else if (option == 2) {
              postData = {};
              postData.masanpham = textCompare;
              $.ajax({
                  url: 'http://localhost:3000/sanpham/infobyid',
                  type: 'POST',
                  data: JSON.stringify(postData),
                  contentType: 'application/json',
                  timeout: 10000
              }).done(data => {
                html='';
                if(data.Masp!=undefined){
                   html += `<div class="leftProduct">
                <div id='img` + data.Masp + `' class="productImage"></div>
                <div id="inform` + data.Masp + `" class="inform">
                    <div class="oneLine">
                        <div class="title">Mã SP: </div>
                        <div class="text">` + data.Masp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên SP: </div>
                        <div class="text">` + data.Tensp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Mã loại SP: </div>
                        <div class="text">` + data.Loaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên loại SP: </div>
                        <div class="text">` + data.Tenloaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Giá bán: </div>
                        <div class="text">` + data.Giasp + `</div>
                    </div>
                </div>
            </div>`;}
                  $('#productDetail').html(html);
                 
                  $('#img'+data.Masp).css('background-image',` url('`+data.Image+`')`);
              }).fail(err => {

              })

          } else if (option == 3) {
              postData = {};
              postData.maloaisp = +textCompare;
              $.ajax({
                  url: 'http://localhost:3000/sanpham/maloai',
                  type: 'POST',
                  data: JSON.stringify(postData),
                  contentType: 'application/json',
                  timeout: 10000
              }).done(data => {
                 var dataLength = data.length;
        
              if (dataLength % 2 == 0) {
                
                  var html = '';
                  for (var i = 0; i < dataLength; i = i + 2) {
                      html += `<div class="leftProduct">
                <div id='img` + data[i].Masp + `' class="productImage"></div>
                <div id="inform` + data[i].Masp + `" class="inform">
                    <div class="oneLine">
                        <div class="title">Mã SP: </div>
                        <div class="text">` + data[i].Masp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên SP: </div>
                        <div class="text">` + data[i].Tensp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Mã loại SP: </div>
                        <div class="text">` + data[i].Loaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên loại SP: </div>
                        <div class="text">` + data[i].Tenloaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Giá bán: </div>
                        <div class="text">` + data[i].Giasp + `</div>
                    </div>
                </div>
            </div>

            <div class="rightProduct">
               <div id='img` + data[i + 1].Masp + `' class="productImage"></div>
                <div id="inform` + data[i + 1].Masp + `" class="inform">
                    <div class="oneLine">
                        <div class="title">Mã SP: </div>
                        <div class="text">` + data[i + 1].Masp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên SP: </div>
                        <div class="text">` + data[i + 1].Tensp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Mã loại SP: </div>
                        <div class="text">` + data[i + 1].Loaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên loại SP: </div>
                        <div class="text">` + data[i + 1].Tenloaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Giá bán: </div>
                        <div class="text">` + data[i + 1].Giasp + `</div>
                    </div>
                </div>
            </div>

            <br><br>`;


                  } //end for

                  $('#productDetail').html(html);
              } else {
                  var html = '';
                  for (var i = 0; i < dataLength - 2; i = i + 2) {
                      html += `<div class="leftProduct">
                <div id='img` + data[i].Masp + `' class="productImage"></div>
                <div id="inform` + data[i].Masp + `" class="inform">
                    <div class="oneLine">
                        <div class="title">Mã SP: </div>
                        <div class="text">` + data[i].Masp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên SP: </div>
                        <div class="text">` + data[i].Tensp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Mã loại SP: </div>
                        <div class="text">` + data[i].Loaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên loại SP: </div>
                        <div class="text">` + data[i].Tenloaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Giá bán: </div>
                        <div class="text">` + data[i].Giasp + `</div>
                    </div>
                </div>
            </div>

            <div class="rightProduct">
               <div id='img` + data[i + 1].Masp + `' class="productImage"></div>
                <div id="inform` + data[i + 1].Masp + `" class="inform">
                    <div class="oneLine">
                        <div class="title">Mã SP: </div>
                        <div class="text">` + data[i + 1].Masp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên SP: </div>
                        <div class="text">` + data[i + 1].Tensp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Mã loại SP: </div>
                        <div class="text">` + data[i + 1].Loaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên loại SP: </div>
                        <div class="text">` + data[i + 1].Tenloaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Giá bán: </div>
                        <div class="text">` + data[i + 1].Giasp + `</div>
                    </div>
                </div>
            </div>

            <br><br>`;



                  } //end for
                  html += `<div class="leftProduct">
                <div id='img` + data[dataLength - 1].Masp + `' class="productImage"></div>
                <div id="inform` + data[dataLength - 1].Masp + `" class="inform">
                    <div class="oneLine">
                        <div class="title">Mã SP: </div>
                        <div class="text">` + data[dataLength - 1].Masp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên SP: </div>
                        <div class="text">` + data[dataLength - 1].Tensp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Mã loại SP: </div>
                        <div class="text">` + data[dataLength - 1].Loaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Tên loại SP: </div>
                        <div class="text">` + data[dataLength - 1].Tenloaisp + `</div>
                    </div>
                    <div class="oneLine">
                        <div class="title">Giá bán: </div>
                        <div class="text">` + data[dataLength - 1].Giasp + `</div>
                    </div>
                </div>
            </div>`;
                  $('#productDetail').html(html);
                  for(i = 0;i< dataLength;i++){
                    $('#img'+data[i].Masp).css('background-image',` url('`+data[i].Image+`')`);
                  }
              }

              }).fail(err => {

              })

          }
      }
  });
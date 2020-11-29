let execPostRequestWithPath = (requestObject, path, func) => {
  $.ajax({
    type: 'POST',
    url: path,
    dataType: 'json',
    data: requestObject,
    success: function(data) {
      func(data);
    },
    error: function(e) {
      func(e);
    }
  });
}

  let execGetRequestWithPath = (path, func) => {
    $.ajax({
      type: 'GET',
      url: path,
      success: function(data) {
        func(data);
      },
      error: function(e) {
        func(e);
      }
    });
  }
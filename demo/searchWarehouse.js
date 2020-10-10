function searchWarehouse()
{
    var city_name = document.getElementById('city_name').value;
    console.log('hello world from demo directory');
    console.log(city_name);
    var url = 'https://stockarea.io/warehouses/'+city_name+"/leasable-space"
    openInNewTab(url);

}

function openInNewTab(url) {
   
    var win = window.open(url, '_blank');
    win.focus();
  }
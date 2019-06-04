

function search() {
	let svalue = $('input')[0].value.split(' ').join('+');
	let container = $(".results")[0];
	container.innerHTML = "";
	let cont = $('.container')[0];
	console.log(svalue);

	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q=" + svalue,
		dataType: 'json',
		success: function(data){
			for(let i = 0; i < data.items.length; i++) {
				console.log(data);
				let title = document.createElement('h5');
				title.innerHTML = data.items[i].volumeInfo.title;
				container.appendChild(title);
				let published = document.createElement('p');
				published.innerHTML = 'Published:' + ' ' + data.items[i].volumeInfo.publishedDate;
				container.appendChild(published);
				let desc = document.createElement('p');
				desc.innerHTML = 'Description:' + ' ' + data.items[i].volumeInfo.description;
				container.appendChild(desc);
				// page count
				let pages = document.createElement('p');
				pages.innerHTML = 'Pages:' + ' ' + data.items[i].volumeInfo.pageCount;
				container.appendChild(pages);
				// end page count
				let learnMore = document.createElement('button');
				learnMore.innerHTML = '<a href="' + data.items[i].volumeInfo.infoLink + '">Learn More</a>';
				container.appendChild(learnMore); 
				let image = document.createElement('img');
				image.className = "resultImage";
				image.src = data.items[i].volumeInfo.imageLinks.smallThumbnail;
				container.appendChild(image);
			}
			
		},
		type: 'GET'

	})
}
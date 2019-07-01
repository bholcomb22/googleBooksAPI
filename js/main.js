

function search() {
	let svalue = $('input')[0].value.split(' ').join('+');
	let container = $(".results")[0];
	container.innerHTML = "";
	console.log(svalue);

	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q=" + svalue,
		dataType: 'json',
		success: function(data){
			for(let i = 0; i < data.items.length; i++) {
				console.log(data);
				let app = document.createElement('div');
				app.className = "temp col-sm-12 col-md-8 ml-auto p-5 mr-auto mb-5 column"
				container.appendChild(app);
				//title
				let title = document.createElement('h3');
				title.innerHTML = data.items[i].volumeInfo.title;
				app.appendChild(title);
				// end title
				// image
				let image = document.createElement('img');
				image.className = "resultImage";
				image.src = data.items[i].volumeInfo.imageLinks.smallThumbnail;
				app.appendChild(image);
				//end image
				// publish
				let published = document.createElement('p');
				published.innerHTML = 'Published:' + ' ' + data.items[i].volumeInfo.publishedDate;
				published.className = "desc-text";
				app.appendChild(published);
				//end published
				// page count
				let pages = document.createElement('p');
				pages.innerHTML = 'Pages:' + ' ' + data.items[i].volumeInfo.pageCount;
				pages.className = "desc-text";
				app.appendChild(pages);
				// end page count
				// description
				let desc = document.createElement('p');
				desc.innerHTML = 'Description:' + ' ' + data.items[i].searchInfo.textSnippet;
				app.appendChild(desc);
				//end description
				
				//learn more
				let learnMore = document.createElement('button');
				learnMore.innerHTML = '<a href="' + data.items[i].volumeInfo.infoLink + '">Learn More</a>';
				app.appendChild(learnMore); 
				//end learn more
				
			}
			
		},
		type: 'GET'

	})
}


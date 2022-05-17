const router = require('express').Router();

const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {
	fs.readFile(path.join(__dirname, 'lorem.txt'), 'utf8', (err, data) => {
		if (err) return console.log(err);

		let datas = data.split(' ');

		let paragraphlength = Math.round(random(20, 500));

		let paragraph = [];

		for (let i = 0; i < paragraphlength; i++) {
			paragraph.push(datas[Math.floor(Math.random() * datas.length)]);
		}
		paragraph.unshift('Lorem ispum dolor sit ');
		paragraph.push('.');

		res.send({ lorem: paragraph.join(' ') });
	});
});

function random(min, max) {
	return min + Math.random() * (max - min);
}

module.exports = router;

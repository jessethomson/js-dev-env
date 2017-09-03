import { expect } from 'chai';
import { JSDOM } from 'jsdom';

describe('Our first test', () => {
	it('should pass', () => {
		expect(true).to.equal(true);
	})
});

describe('index.html', () => {
	it('should say hello', () => {
		return JSDOM.fromFile('./src/index.html')
			.then(dom => {
				const h1 = dom.window.document.querySelector('h1');
				expect(h1.textContent).to.equal('Hello World!');
				dom.window.close();
			});
	})
})

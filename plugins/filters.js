import Vue from 'vue';
import { distanceInWordsToNow } from 'date-fns';
import { parse } from 'url';

Vue.filter('timeSince', timeStamp => {
	const time = Number(timeStamp) * 1000;
	return distanceInWordsToNow(time);
});

Vue.filter('hostname', url => parse(url).hostname.replace(/^www\./, ''));
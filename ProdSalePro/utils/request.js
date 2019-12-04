//#ifdef H5
  const baseURL = process.env.NODE_ENV === 'development'? 'http://localhost:8000/api/v1' : 'http://49.235.51.111:3000/api/v1';
//#endif;
//#ifndef H5 
  const baseURL = process.env.NODE_ENV === 'development'? 'http://localhost:3000/api/v1' : 'http://49.235.51.111:3000/api/v1';
//#endif;
  const headers = {
  	'content-type': 'application/json'
  }
const fetch = (options) => {
	return new Promise((resolve, reject) => {
		console.log(baseURL + options.url)
		uni.request({
			url: baseURL + options.url,
			header: headers,
			method: options.method || 'GET',
			data: options.data || null,
			success:(res) => { resolve(res.data) },
			fail: (err) => { reject(err)}
		})
	})
}
export default fetch
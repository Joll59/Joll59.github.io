---
title: Adapter Pattern
date: 2017-02-28 12:15:56
tags: Notes
---

Set this on action/index.js

```js
	axios.defaults.baseURL = 'http://localhost:3000/api/v1'
	axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')
```

- Use sessionStorage to check response stores!

Set this in controller!
```ruby
	token = request.headers["HTTP_AUTHORIZATION"]
	If  token
		user_info = Auth.decode(token)
		@current_user ||= User.find(user_info['user_id'])
```

* new folder /adapters
	* userAdapter.js
	* export default notesAdapter = {
		fetchNotes: , loginUser: , createNote: , updateNote: , }	 

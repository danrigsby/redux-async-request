/**
 * Represents an async request exposing:
 * 1. isLoading: whether or not the operation is currently loading
 * 2. request: data about the request that initiated the operation
 * 3. response: the successful response of the operation (null if operation was rejected)
 * 4. error: the error response of the operation (null if operation was successful)
 */
function AsyncRequest() {
  this.isLoading = false;
  this.request = null;
  this.response = null;
  this.error = null;
}

export default AsyncRequest;

# gl-coding-excercise
## Time complexity analysis
Since the sample data is not ordered by date, I have assumed data is not necessarily ordered. Hence, I have opted to sort once in the beginning in order to ensure FIFO behaviour

The sorting operation takes, at most, O(n log(n)) where n is the size of the array.
Then, we only have to iterate over all sale orders and determine when enough stock will be available to fulfil the order.
Let there be n sale orders and m purchase orders. To determine when the requests will be delivered would take  O(n + m) which is linear in relation the size of the arrays, given that we only need to check once for each element in any given array.

Hence, the overall time complexity of the algorithm is O(k log(k)) where k is the maximum value between n and m previously defined.

## How to use

In the project directory, you can install all dependencies and start the application, to do so, please follow the next steps:

### Install dependencies

Follow the next steps to install the required dependencies:

1. Install [Node Version Manager](https://github.com/nvm-sh/nvm): `brew install nvm`
2. Install node version using nvm and use local version: `nvm install`
3. Use nvm version set in project `.nvmrc`: `nvm use`

### Execute project
1. To execute an example output use `npm start`
2. To execute unit tests and create coverage report use `npm test`

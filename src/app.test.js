/**
 * Created by jgluhov on 31/01/16.
 */
import 'angular';
import 'angular-mocks';

const testsContext = require.context('.', true, /.test$/);
testsContext.keys().forEach(testsContext);

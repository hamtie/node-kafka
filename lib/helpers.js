

var extend = exports.extend = function (target, extendWith) {
	target = target || {}
	for (var key in extendWith) {
		if (typeof target[key] != 'undefined') { continue }
		target[key] = extendWith[key]
	}
	return target
}

// приведение метода Element.matches к кроссбраузерному имени "matches"
(function makeMatchesCrossBrowser() {
    var proto = Element.prototype;
    proto.matches = proto.matches || proto.webkitMatchesSelector || proto.msMatchesSelector;
})();

export class Utilities {
    findSelectorAbove = (element, targetSelector, ancestorSelector) => {
        var ancestorMatchSelector = ancestorSelector + ' *';
        
        if (element.matches(ancestorMatchSelector)) {
            for (var closest = element; !closest.matches(targetSelector); closest = closest.parentNode) {

                if (!closest.matches(ancestorMatchSelector)) {
                    return null;
                }
            }

            return closest;

        } else {
            return null;
        }
    }
}
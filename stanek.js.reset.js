/** @param {NS} ns 
 * Reset all charges without losing the current placement / positioning of fragments **/
export async function main(ns) {
    for (const fragment of ns.stanek.activeFragments()) {
        const [id, x, y, r] = [fragment.id, fragment.x, fragment.y, fragment.rotation];
        ns.stanek.removeFragment(x, y);
        ns.stanek.placeFragment(x, y, r, id);
    }
}
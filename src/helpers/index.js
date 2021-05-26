export function currentYear() {
    return new Date().getFullYear();
}

export function activeOnFocus(e) {
    e.target.parentElement.classList.add("active");
}

export function inActiveOnBlur(e) {
    if (e.target.value === null || e.target.value === "") {
        e.target.parentElement.classList.remove("active");
    }
}

export function isObjectNull(obj) {
    Object.entries(obj).length === 0 && obj.constructor === Object
}

export function checkNull(e) {
    return typeof e != "undefined" && e;
}
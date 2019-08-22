function phoneNumber(num) {
    regexp = /^\([0-9]{2}\)\-\([0][0-9]{9}\)$/;
    if (regexp.test(num)) {
        alert('true')
    }else {
        alert('false')
    }
}
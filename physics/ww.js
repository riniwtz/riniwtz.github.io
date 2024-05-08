
q16QA = document.getElementById('q16-qa')
q16QB = document.getElementById('q16-qb')
q16AA = document.getElementById('q16-aa')

q17QA = document.getElementById('q17-qa')
q17QB = document.getElementById('q17-qb')
q17AA = document.getElementById('q17-aa')

q18QA = document.getElementById('q18-qa')
q18QB = document.getElementById('q18-qb')
q18AA = document.getElementById('q18-aa')
q18AB = document.getElementById('q18-ab')
q18AC = document.getElementById('q18-ac')

q19QA = document.getElementById('q19-qa')
q19AA = document.getElementById('q19-aa')

q20QA = document.getElementById('q20-qa')
q20AA = document.getElementById('q20-aa')

q21QA = document.getElementById('q21-qa')
q21AA = document.getElementById('q21-aa')

q22QA = document.getElementById('q22-qa')
q22QB = document.getElementById('q22-qb')
q22AA = document.getElementById('q22-aa')

q23QA = document.getElementById('q23-qa')
q23QB = document.getElementById('q23-qb')
q23QC = document.getElementById('q23-qc')
q23AA = document.getElementById('q23-aa')

q24QA = document.getElementById('q24-qa')
q24QB = document.getElementById('q24-qb')
q24QC = document.getElementById('q24-qc')
q24AA = document.getElementById('q24-aa')
q24AB = document.getElementById('q24-ab')

q25QA = document.getElementById('q25-qa')
q25QB = document.getElementById('q25-qb')
q25AA = document.getElementById('q25-aa')


function copyElement(element) {
    element.select()
    element.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(element.value.trim());
}

function copy(value) {
    switch (value) {
        case "16a": {
            copyElement(q16AA);
            break;
        }
        case "17a": {
            copyElement(q17AA);
            break;
        }
        case "18a": {
            copyElement(q18AA);
            break;
        }
        case "18b": {
            copyElement(q18AB);
            break;
        }
        case "18c": {
            copyElement(q18AC);
            break;
        }
        case "19a": {
            copyElement(q19AA);
            break;
        }
        case "20a": {
            copyElement(q20AA);
            break;
        }
        case "21a": {
            copyElement(q21AA);
            break;
        }
        case "22a": {
            copyElement(q22AA);
            break;
        }
        case "23a": {
            copyElement(q23AA);
            break;
        }
        case "24a": {
            copyElement(q24AA);
            break;
        }
        case "24b": {
            copyElement(q24AB);
            break;
        }
        case "25a": {
            copyElement(q25AA);
            break;
        }
    }
}

// WW6

class WW6 {
    constructor() {
        this.speedOfLight = 3 * Math.pow(10, 8);
    }

    q16(refraction_index_a, refraction_index_b) {
        return this.speedOfLight / (refraction_index_a + (((refraction_index_b - refraction_index_a) / 6) * 2));
    }

    q17(refraction_index_a, refraction_index_b) {
        return (this.speedOfLight / refraction_index_a) - (this.speedOfLight / refraction_index_b);
    }

    q18(wavelength, refraction_index) {
        // nanometers to meters
        const a = this.speedOfLight / (wavelength / 1e9);
        const b = wavelength / refraction_index;
        const c = a * (b / 1e9);

        return [a, b, c];
    }

    q19(speed) {
        return this.speedOfLight / speed;
    }

    q20(refractive_index) {
        return this.speedOfLight / refractive_index;
    }

    q21(refractive_index) {
        return this.speedOfLight / refractive_index;
    }

    q22(cm1, cm2) {
        return cm1 + cm2;
    }

    q23(pa, pb, objectDistance) {
        const m_t = 2;
        const p = (pa + pb) / m_t;
        let i = -m_t * p;
        const f = (p * i) / (p + i);
        i = 1 / ((1 / f) - (1 / objectDistance));
        const m = -i / objectDistance;

        return m;
    }

    q24(n, R, objectDistance) {
        const f = R / (n - 1);
        const ans = 1 / ((1 / f) - (1 / objectDistance));
        return [f, ans];
    }

    q25(ps, objectDistance) {
        const a = ps / 4 * 3;
        const v = -0.5 * a;
        const b = 1 / ((1 / a) + (1 / v));
        const c = 1 / ((1 / b) - (1 / objectDistance));
        const d = -(c / objectDistance);
        return d;
    }
}

class Utility {
    static inputNotEmpty(element) {
        return element.value.trim() !== ''
    }
    
    static inputIsEmpty(element) {
        return element.value.trim() == ''
    }
    
    static isNumeric(str) {
        if (typeof str != "string") return false // we only process strings!  
        return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
               !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
    }
    
    static isValidInput(element) {
        if (this.inputNotEmpty(element) && this.isNumeric(element.value)) {
            return true;
        }
        return false;
    }
}

class ValueUpdater {
    static updateQ16Value(qa, qb, aa) {
        if (Utility.isValidInput(qa) && Utility.isValidInput(qb)) {
            const qav = parseFloat(qa.value)
            const qbv = parseFloat(qb.value)
            aa.value = ww6.q16(qav, qbv)
        } else {
            if (Utility.inputIsEmpty(qa) || Utility.inputIsEmpty(qb)) {
                aa.value = ""
            }
        }
    }
    
    static updateQ17Value(qa, qb, aa) {
        if (Utility.isValidInput(qa) && Utility.isValidInput(qb)) {
            const qav = parseFloat(qa.value)
            const qbv = parseFloat(qb.value)
            aa.value = ww6.q17(qav, qbv)
        } else {
            if (Utility.inputIsEmpty(qa) || Utility.inputIsEmpty(qb)) {
                aa.value = ""
            }
        }
    }
        
    static updateQ18Value(qa, qb, aa, ab, ac) {
        if (Utility.isValidInput(qa) && Utility.isValidInput(qb)) {
            const qav = parseFloat(qa.value)
            const qbv = parseFloat(qb.value)
            aa.value = ww6.q18(qav, qbv)[0]
            ab.value = ww6.q18(qav, qbv)[1]
            ac.value = ww6.q18(qav, qbv)[2]
        } else {
            if (Utility.inputIsEmpty(qa) || Utility.inputIsEmpty(qb)) {
                aa.value = ""
                ab.value = ""
                ac.value = ""
            }
        }
    }

    static updateQ19Value(qa, aa) {
        if (Utility.isValidInput(qa)) {
            const qav = parseFloat(qa.value)
            aa.value = ww6.q19(qav)
        } else {
            if (Utility.inputIsEmpty(qa)) {
                aa.value = ""
            }
        }
    }

    static updateQ20Value(qa, aa) {
        if (Utility.isValidInput(qa)) {
            const qav = parseFloat(qa.value)
            aa.value = ww6.q20(qav)
        } else {
            if (Utility.inputIsEmpty(qa)) {
                aa.value = ""
            }
        }
    }

    static updateQ21Value(qa, aa) {
        if (Utility.isValidInput(qa)) {
            const qav = parseFloat(qa.value)
            aa.value = ww6.q21(qav)
        } else {
            if (Utility.inputIsEmpty(qa)) {
                aa.value = ""
            }
        }
    }

    static updateQ22Value(qa, qb, aa) {
        if (Utility.isValidInput(qa) && Utility.isValidInput(qb)) {
            const qav = parseFloat(qa.value)
            const qbv = parseFloat(qb.value)
            aa.value = ww6.q22(qav, qbv)
        } else {
            if (Utility.inputIsEmpty(qa) || Utility.inputIsEmpty(qb)) {
                aa.value = ""
            }
        }
    }

    static updateQ23Value(qa, qb, qc, aa) {
        if (Utility.isValidInput(qa) && Utility.isValidInput(qb) && Utility.isValidInput(qc)) {
            const qav = parseFloat(qa.value)
            const qbv = parseFloat(qb.value)
            const qcv = parseFloat(qc.value)
            aa.value = ww6.q23(qav, qbv, qcv)
        } else {
            if (Utility.inputIsEmpty(qa) || Utility.inputIsEmpty(qb) || Utility.inputIsEmpty(qc)) {
                aa.value = ""
            }
        }
    }

    static updateQ24Value(qa, qb, qc, aa, ab) {
        if (Utility.isValidInput(qa) && Utility.isValidInput(qb) && Utility.isValidInput(qc)) {
            const qav = parseFloat(qa.value)
            const qbv = parseFloat(qb.value)
            const qcv = parseFloat(qc.value)
            aa.value = ww6.q24(qav, qbv, qcv)[0]
            ab.value = ww6.q24(qav, qbv, qcv)[1]
        } else {
            if (Utility.inputIsEmpty(qa) || Utility.inputIsEmpty(qb) || Utility.inputIsEmpty(qc)) {
                aa.value = ""
                ab.value = ""
            }
        }
    }

    static updateQ25Value(qa, qb, aa) {
        if (Utility.isValidInput(qa) && Utility.isValidInput(qb)) {
            const qav = parseFloat(qa.value)
            const qbv = parseFloat(qb.value)
            aa.value = ww6.q25(qav, qbv)
        } else {
            if (Utility.inputIsEmpty(qa) || Utility.inputIsEmpty(qb)) {
                aa.value = ""
            }
        }
    }
}


const ww6 = new WW6()

q16QA.addEventListener('keyup', (e) => {
    ValueUpdater.updateQ16Value(q16QA, q16QB, q16AA);
});
q16QB.addEventListener('keyup', (e) => {
    ValueUpdater.updateQ16Value(q16QA, q16QB, q16AA);
});

// Q17

q17QA.addEventListener('keyup', (e) => {
    ValueUpdater.updateQ17Value(q17QA, q17QB, q17AA);
});
q17QB.addEventListener('keyup', (e) => {
    ValueUpdater.updateQ17Value(q17QA, q17QB, q17AA);
});

// Q18

q18QA.addEventListener('keyup', (e) => {
    ValueUpdater.updateQ18Value(q18QA, q18QB, q18AA, q18AB, q18AC);
});
q18QB.addEventListener('keyup', (e) => {
    ValueUpdater.updateQ18Value(q18QA, q18QB, q18AA, q18AB, q18AC);
});

// Q19`

q19QA.addEventListener('keyup', (e) => {
    ValueUpdater.updateQ19Value(q19QA, q19AA);
});

// Q20

q20QA.addEventListener('keyup', (e) => {
    ValueUpdater.updateQ20Value(q20QA, q20AA);
});

// Q21

q21QA.addEventListener('keyup', (e) => {
    ValueUpdater.updateQ21Value(q21QA, q21AA);
});

// Q22

q22QA.addEventListener('keyup', (e) => {
    ValueUpdater.updateQ22Value(q22QA, q22QB, q22AA);
});
q22QB.addEventListener('keyup', (e) => {
    ValueUpdater.updateQ22Value(q22QA, q22QB, q22AA);
});

// Q23

q23QA.addEventListener('keyup', (e) => {
    ValueUpdater.updateQ23Value(q23QA, q23QB, q23QC, q23AA);
});
q23QB.addEventListener('keyup', (e) => {
    ValueUpdater.updateQ23Value(q23QA, q23QB, q23QC, q23AA);
});
q23QC.addEventListener('keyup', (e) => {
    ValueUpdater.updateQ23Value(q23QA, q23QB, q23QC, q23AA);
});

// Q24
q24QA.addEventListener('keyup', (e) => {
    ValueUpdater.updateQ24Value(q24QA, q24QB, q24QC, q24AA, q24AB);
});
q24QB.addEventListener('keyup', (e) => {
    ValueUpdater.updateQ24Value(q24QA, q24QB, q24QC, q24AA, q24AB);
});
q24QC.addEventListener('keyup', (e) => {
    ValueUpdater.updateQ24Value(q24QA, q24QB, q24QC, q24AA, q24AB);
});

// Q25

q25QA.addEventListener('keyup', (e) => {
    ValueUpdater.updateQ25Value(q25QA, q25QB, q25AA);
});
q25QB.addEventListener('keyup', (e) => {
    ValueUpdater.updateQ25Value(q25QA, q25QB, q25AA);
});
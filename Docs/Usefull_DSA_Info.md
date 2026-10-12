## 📅 Year and Month Days

---

### 🗓️ 1. Types of Years

| Year Type | Total Days | Days in February |
|---|---:|---:|
| **Leap Year** | 366 days | 29 days |
| **Normal Year** | 365 days | 28 days |

---

### 📌 2. Days in Each Month

#### 🟢 Months with 31 Days
- January (1)
- March (3)
- May (5)
- July (7)
- August (8)
- October (10)
- December (12)

#### 🔵 Months with 30 Days
- April (4)
- June (6)
- September (9)
- November (11)

#### 🟡 February (2)
- **Leap Year:** 29 days
- **Normal Year:** 28 days

---

### 💡 Quick Revision

- **7 months** have 31 days.
- **4 months** have 30 days.
- **February** has 28 or 29 days.
- **Leap Year:** 366 days.
- **Normal Year:** 365 days.


----

  # Bitwise Operators in JavaScript

Bitwise operators perform operations on the binary bits (`0` and `1`) of numbers.

## 1. Bitwise AND (`&`)

<div>
  <span style="display:inline-flex;align-items:center;justify-content:center;width:54px;height:54px;border-radius:50%;background:#d1fae5;color:#065f46;font-size:28px;font-weight:bold;vertical-align:middle;">&amp;</span>
  <span style="font-size:24px;font-weight:bold;margin-left:12px;vertical-align:middle;">AND Operator</span>
</div>

- **Popular name:** Bitwise AND
- **Other name:** AND operation


### Truth Table

| Bit A | Bit B | A & B |
|:---:|:---:|:---:|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

### Example

```js
console.log(5 & 3); // 1
```

```text
  101  (5)
& 011  (3)
-----
  001  (1)
```

### Explanation

- Returns `1` only when **both corresponding bits are `1`**.
- Returns `0` if either bit is `0`.
- **Effect:** Keeps only the bits that are set (`1`) in both numbers.

### Uses

- Checking whether a particular bit is set.
- Extracting selected bits using a bitmask.
- Working with flags and low-level data.

---

## 2. Bitwise OR (`|`)

<div>
  <span style="display:inline-flex;align-items:center;justify-content:center;width:54px;height:54px;border-radius:50%;background:#fef3c7;color:#92400e;font-size:28px;font-weight:bold;vertical-align:middle;">|</span>
  <span style="font-size:24px;font-weight:bold;margin-left:12px;vertical-align:middle;">OR Operator</span>
</div>

- **Popular name:** Bitwise OR
- **Other name:** Inclusive OR


### Truth Table

| Bit A | Bit B | A \| B |
|:---:|:---:|:---:|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

### Example

```js
console.log(5 | 3); // 7
```

```text
  101  (5)
| 011  (3)
-----
  111  (7)
```

### Explanation

- Returns `1` when **at least one corresponding bit is `1`**.
- Returns `0` only when both bits are `0`.
- **Effect:** Combines the set bits from both numbers.

### Uses

- Setting specific bits.
- Combining multiple flags.
- Enabling options represented by individual bits.

---

## 3. Bitwise XOR (`^`)

<div>
  <span style="display:inline-flex;align-items:center;justify-content:center;width:54px;height:54px;border-radius:50%;background:#ede9fe;color:#5b21b6;font-size:28px;font-weight:bold;vertical-align:middle;">^</span>
  <span style="font-size:24px;font-weight:bold;margin-left:12px;vertical-align:middle;">XOR Operator</span>
</div>

- **Popular name:** Bitwise XOR
- **Full name:** Exclusive OR


### Truth Table

| Bit A | Bit B | A ^ B |
|:---:|:---:|:---:|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

### Example

```js
console.log(5 ^ 3); // 6
```

```text
  101  (5)
^ 011  (3)
-----
  110  (6)
```

### Explanation

- Returns `1` when **the corresponding bits are different**.
- Returns `0` when both bits are the same.
- **Effect:** Identifies differences between corresponding bits.

### Uses

- Finding differences between bit patterns.
- Toggling specific bits.
- Solving problems involving pairs of numbers and XOR properties.

---

## 4. Bitwise NOT (`~`)

<div>
  <span style="display:inline-flex;align-items:center;justify-content:center;width:54px;height:54px;border-radius:50%;background:#fce7f3;color:#9d174d;font-size:28px;font-weight:bold;vertical-align:middle;">~</span>
  <span style="font-size:24px;font-weight:bold;margin-left:12px;vertical-align:middle;">NOT Operator</span>
</div>

- **Popular name:** Bitwise NOT
- **Other names:** Complement operator, bitwise complement
- **Symbol:** `~`

### Truth Table

| Bit A | ~A |
|:---:|:---:|
| 0 | 1 |
| 1 | 0 |

### Example

```js
console.log(~5); // -6
```

For a simplified 4-bit illustration:

```text
  0101  (5)
  ----
  1010  (inverted bits)
```

### Explanation

- Converts each `0` bit to `1`.
- Converts each `1` bit to `0`.
- **Effect:** Inverts the bits of the number.

**Important in JavaScript:** Bitwise NOT operates using a 32-bit signed integer representation. Therefore, `~5` returns `-6`, not `10`.

For JavaScript bitwise operations:

```js
~n === -(n + 1)
```

### Uses

- Inverting bits.
- Working with bitmasks.
- Low-level integer and bit manipulation.

---

## 5. Left Shift (`<<`)

<div>
  <span style="display:inline-flex;align-items:center;justify-content:center;width:54px;height:54px;border-radius:50%;background:#cffafe;color:#155e75;font-size:23px;font-weight:bold;vertical-align:middle;">&lt;&lt;</span>
  <span style="font-size:24px;font-weight:bold;margin-left:12px;vertical-align:middle;">Left Shift Operator</span>
</div>

- **Popular name:** Left shift
- **Other name:** Bitwise left shift
- **Symbol:** `<<`

### Example

```js
console.log(5 << 1); // 10
```

```text
Before:  0101  (5)
Shift:  1010   (10)
```

### Explanation

- Shifts the bits to the left by the specified number of positions.
- Vacated positions on the right are filled with `0`.
- **Effect:** For non-negative integers within the usual range, shifting left by `n` positions corresponds to multiplying by \(2^n\), subject to JavaScript's 32-bit integer behavior.

```js
5 << 1; // 10  (5 * 2)
5 << 2; // 20  (5 * 4)
```

### Uses

- Bitmask creation.
- Working with binary representations.
- Efficient calculations involving powers of two when integer limits are respected.

---

## 6. Right Shift (`>>`)

<div>
  <span style="display:inline-flex;align-items:center;justify-content:center;width:54px;height:54px;border-radius:50%;background:#ffedd5;color:#9a3412;font-size:23px;font-weight:bold;vertical-align:middle;">&gt;&gt;</span>
  <span style="font-size:24px;font-weight:bold;margin-left:12px;vertical-align:middle;">Right Shift Operator</span>
</div>

- **Popular name:** Right shift
- **Other name:** Sign-propagating right shift
- **Symbol:** `>>`

### Example

```js
console.log(5 >> 1); // 2
```

```text
Before: 0101  (5)
Shift:  0010  (2)
```

### Explanation

- Shifts the bits to the right by the specified number of positions.
- The leftmost positions are filled with the original sign bit.
- **Effect:** For non-negative integers, shifting right by `n` positions corresponds to taking the integer part of division by \(2^n\).

```js
5 >> 1; // 2  (5 / 2, integer result)
8 >> 2; // 2  (8 / 4)
```

### Uses

- Extracting higher-order or lower-order bits.
- Dividing non-negative integers by powers of two.
- Processing binary data and bitmasks.

---

## Quick Recap

| Operator | Name | Quick rule | Example | Result |
|:---:|---|---|---|---:|
| `&` | AND | Both bits must be `1` | `5 & 3` | `1` |
| `\|` | OR | At least one bit is `1` | `5 \| 3` | `7` |
| `^` | XOR | Bits must be different | `5 ^ 3` | `6` |
| `~` | NOT | Invert every bit | `~5` | `-6` |
| `<<` | Left shift | Shift bits left | `5 << 1` | `10` |
| `>>` | Right shift | Shift bits right | `5 >> 1` | `2` |

## Why Learn Bitwise Operators?

- **Performance:** Useful for low-level integer operations and compact calculations.
- **Memory efficiency:** Multiple Boolean flags can be stored in one integer using bitmasks.
- **Cybersecurity:** Useful in cryptographic implementations, binary protocols, and data processing.
- **Problem solving:** Common in competitive programming, bit manipulation, and algorithmic optimization.

**Remember:** AND keeps common set bits, OR combines set bits, XOR identifies differing bits, NOT inverts bits, and shift operators move bits left or right.

## 📚 Table of Contents

| S.No. | Topic | Description | Page No. |
|---:|---|---|---:|
| 1 | Year Days and Leap Year | Year types, days in each month, and February | 1 |
| 2 | Bitwise Operations | AND, OR, XOR, NOT, left shift, and right shift | 1 |
| 3 | Prime Number | Identifying prime numbers and finding prime factors | 1 |

---

<span style="display:block;background:#cbd5e1;color:#334155;width:100%;box-sizing:border-box;padding:1px 8px;font-size:11px;font-weight:bold;border-radius:2px;">PAGE 1</span>

# 📅 1. Types of Years

| Year Type | Total Days | Days in February |
|---|---:|---:|
| **Leap Year** | 366 days | 29 days |
| **Normal Year** | 365 days | 28 days |

## 🗓️  Days in Each Month

### 🟢 Months with 31 Days
- January (1)
- March (3)
- May (5)
- July (7)
- August (8)
- October (10)
- December (12)

### 🔵 Months with 30 Days
- April (4)
- June (6)
- September (9)
- November (11)

### 🟡 February (2)
- **Leap Year:** 29 days
- **Normal Year:** 28 days

### 💡 Quick Revision
- 7 months have 31 days.
- 4 months have 30 days.
- February has 28 or 29 days.
- Leap year: 366 days.
- Normal year: 365 days.

---

# Logical Operations

## ⚙️ 1`. Bitwise AND (`&`)

Bitwise operators perform operations on the binary bits (`0` and `1`) of numbers.

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
- Returns `1` only when both corresponding bits are `1`.
- Returns `0` if either bit is `0`.
- Keeps only the bits set in both numbers.

### Uses
- Checking whether a bit is set.
- Extracting selected bits using a bitmask.
- Working with flags and low-level data.

---

## 🔗 2. Bitwise OR (`|`)

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
- Returns `1` when at least one corresponding bit is `1`.
- Returns `0` only when both bits are `0`.
- Combines the set bits from both numbers.

### Uses
- Setting specific bits.
- Combining multiple flags.
- Enabling options represented by individual bits.

---

## 🔀 3. Bitwise XOR (`^`)

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
- Returns `1` when corresponding bits are different.
- Returns `0` when both bits are the same.
- Identifies differences between corresponding bits.

### Uses
- Finding differences between bit patterns.
- Toggling specific bits.
- Solving problems involving XOR properties.

---



## 🪞 4. Bitwise NOT (`~`)

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
- Inverts the bits of a number.

**Important in JavaScript:** Bitwise NOT uses a 32-bit signed integer representation.

```js
~n === -(n + 1)
```

### Uses
- Inverting bits.
- Working with bitmasks.
- Low-level integer manipulation.

---

## ⬅️ 5. Left Shift (`<<`)

- **Popular name:** Left shift
- **Other name:** Bitwise left shift
- **Symbol:** `<<`

### Example

```js
console.log(5 << 1); // 10
```

```text
Before: 0101 (5)
After:  1010 (10)
```

### Explanation
- Shifts bits to the left by the specified number of positions.
- Vacated positions on the right are filled with `0`.
- For suitable non-negative integers, shifting left by `n` positions corresponds to multiplying by \(2^n\), subject to JavaScript's 32-bit integer behavior.

```js
5 << 1; // 10
5 << 2; // 20
```

### Uses
- Creating bitmasks.
- Working with binary representations.
- Calculations involving powers of two.

---

## ➡️ 6. Right Shift (`>>`)

- **Popular name:** Right shift
- **Other name:** Sign-propagating right shift
- **Symbol:** `>>`

### Example

```js
console.log(5 >> 1); // 2
```

```text
Before: 0101 (5)
After:  0010 (2)
```

### Explanation
- Shifts bits to the right by the specified number of positions.
- The leftmost positions are filled with the original sign bit.
- For non-negative integers, shifting right by `n` positions corresponds to taking the integer part of division by \(2^n\).

```js
5 >> 1; // 2
8 >> 2; // 2
```

### Uses
- Extracting bits.
- Dividing non-negative integers by powers of two.
- Processing binary data and bitmasks.

---

## 📊 Bitwise Operators — Quick Recap

| Operator | Name | Quick Rule | Example | Result |
|:---:|---|---|---|---:|
| `&` | AND | Both bits must be `1` | `5 & 3` | `1` |
| `\|` | OR | At least one bit is `1` | `5 \| 3` | `7` |
| `^` | XOR | Bits must be different | `5 ^ 3` | `6` |
| `~` | NOT | Invert every bit | `~5` | `-6` |
| `<<` | Left shift | Shift bits left | `5 << 1` | `10` |
| `>>` | Right shift | Shift bits right | `5 >> 1` | `2` |

### Remember
- AND keeps common set bits.
- OR combines set bits.
- XOR identifies differing bits.
- NOT inverts bits.
- Shift operators move bits left or right.

---

## 🚀 10. Why Learn Bitwise Operators?

- **Performance:** Useful for low-level integer operations.
- **Memory efficiency:** Multiple Boolean flags can be stored in one integer using bitmasks.
- **Cybersecurity:** Useful in cryptographic implementations, binary protocols, and data processing.
- **Problem solving:** Common in competitive programming and algorithm optimization.

---


## 🔢 3. Prime Number

A **prime number** is a natural number greater than `1` that has exactly two factors: `1` and itself.

### Examples
- `5` → Factors: `1, 5` → Prime number
- `7` → Factors: `1, 7` → Prime number

---

## 🧩  Prime Factors

**Prime factors** are the factors of a number that are themselves prime numbers.

### Example 1: Number = 12
- Factors: `1, 2, 3, 4, 6, 12`
- Prime factors: `2, 3`

### Example 2: Number = 30
- Factors: `1, 2, 3, 5, 6, 10, 15, 30`
- Prime factors: `2, 3, 5`

---


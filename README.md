# Stocktake Compare

Compare your physical stocktake counts against your system's expected stock levels and see every difference at a glance.

## What It Does

- Import your **system stock list** (what the records say you have)
- Import your **stocktake count** (what was actually counted)
- Automatically match items by SKU / item code
- Highlight **variances**: shortages, overages, missing items, and items not in the system
- Export a clean variance report

## Features

- Side-by-side comparison of expected vs counted quantities
- Variance calculation (quantity and percentage)
- Flags for items counted but not in the system, and items in the system but not counted
- Filter and sort by variance size, category, or status
- CSV import and export

## Getting Started

### Requirements

- _List your runtime here (e.g. Node.js 18+, Python 3.10+, Android 8+)_

### Installation

```bash
git clone https://github.com/<your-username>/stocktake-compare.git
cd stocktake-compare
```

_Add your install and run commands here._

## How To Use

1. **Prepare your files.** Both files need at least an item code and a quantity column.

   | item_code | description | quantity |
   |-----------|-------------|----------|
   | A001      | Rice 1kg    | 120      |
   | A002      | Sugar 1kg   | 80       |

2. **Import the system stock file** (expected quantities).
3. **Import the stocktake file** (counted quantities).
4. **Run the comparison.**
5. **Review the results** and export the variance report.

## Understanding the Results

| Status | Meaning |
|--------|---------|
| Match | Counted quantity equals system quantity |
| Shortage | Counted less than the system says |
| Overage | Counted more than the system says |
| Not counted | In the system but missing from the count |
| Not in system | Counted but not in the system list |

**Variance = Counted quantity − System quantity**

## Project Structure

```
stocktake-compare/
├── README.md
└── ...            <- add your folders and files here
```

## Roadmap

- [ ] Multiple location / warehouse support
- [ ] Barcode scanning for counts
- [ ] Save and compare past stocktakes
- [ ] PDF report export

## Contributing

Suggestions and pull requests are welcome. Open an issue first to discuss any major change.

## License

_Add your license here (e.g. MIT)._

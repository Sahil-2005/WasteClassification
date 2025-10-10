---
datasets:
- garythung/trashnet
language:
- en
metrics:
- loss
- accuracy
tags:
- code
pipeline_tag: image-classification
library_name: keras
---
# TrashNet-Classification

This project focuses on classifying images of garbage into distinct categories using transfer learning with the MobileNetV2 architecture. The goal is to facilitate efficient waste segregation by accurately identifying types of trash, which is essential for effective recycling and waste management.

## Overview

The TrashNet-Classification project utilizes transfer learning with MobileNetV2 to classify images of garbage into categories such as cardboard, glass, paper, metal, and trash. By leveraging a pre-trained model, the project aims to achieve high accuracy with reduced training time and computational resources.

## Project Structure

- `dataset/`: Directory containing the data set used in model training.
- `model/`: Directory containing the trained model.
- `01_Preprocessing-Data.ipynb`: Notebook for data preprocessing, including dataset download, extraction, and data augmentation.
- `02_Train-Model.ipynb`: Notebook for training the MobileNetV2 model with the preprocessed data.
- `03_Quantization_model.ipynb`: Notebook for model quantization to optimize performance.
- `requirements.txt`: List of Python dependencies required to run this project.

## Requirements

Ensure you have Python 3.x installed and install the dependencies listed in `requirements.txt`:

```bash
pip install -r requirements.txt
```

## Usage

- **Data Preprocessing**: Run the `01_Preprocessing-Data.ipynb` notebook to download and prepare the dataset. This notebook performs data augmentation to enhance model performance.
- **Model Training**: Once the data is prepared, execute `02_Train-Model.ipynb` to train the MobileNetV2 model with the processed data. This notebook includes steps for training and evaluating the model.
- **Model Quantization**: To optimize the model, run `03_Quantization_model.ipynb`. This step is optional but recommended for improving model efficiency.

## Dataset

The dataset used is [TrashNet](https://huggingface.co/datasets/garythung/trashnet), which consists of images of trash in six categories: cardboard, glass, metal, paper, plastic, and trash. This dataset is widely used in research for deep learning-based trash classification. 

## Installation

To set up the project environment, follow these steps:

1. Clone the repository:

```bash
git clone https://huggingface.co/ahmzakif/TrashNet-Classification
cd TrashNet-Classification
```

2. Create and activate a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install the required dependencies:

```bash
pip install -r requirements.txt
```

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request. Please ensure that your contributions align with the project's objectives and adhere to the coding standards.

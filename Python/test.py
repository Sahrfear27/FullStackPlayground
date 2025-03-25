import sys
from PyQt6.QtWidgets import QApplication, QWidget, QLabel, QPushButton, QVBoxLayout


class MyWindow(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Welcome")
        self.setGeometry(600, 600, 600, 200)  # x, y, width, height

        # Create label
        self.label = QLabel("Please Select the Recipe you want to View", self)

        # Create buttons for each recipe
        self.nstd_button = QPushButton("NSTD", self)
        self.ocd_button = QPushButton("OCD", self)
        self.sta_button = QPushButton("STA", self)
        self.bare_button = QPushButton("BARE", self)

        # Connect each button to the handler function
        self.nstd_button.clicked.connect(lambda: self.on_button_click("NSTD"))
        self.ocd_button.clicked.connect(lambda: self.on_button_click("OCD"))
        self.sta_button.clicked.connect(lambda: self.on_button_click("STA"))
        self.bare_button.clicked.connect(lambda: self.on_button_click("BARE"))

        # Layout setup
        layout = QVBoxLayout()
        layout.addWidget(self.label)
        layout.addWidget(self.nstd_button)
        layout.addWidget(self.ocd_button)
        layout.addWidget(self.sta_button)
        layout.addWidget(self.bare_button)

        self.setLayout(layout)

    def on_button_click(self, recipe_name):
        self.label.setText(f"Selected Recipe: {recipe_name}")


if __name__ == '__main__':
    app = QApplication(sys.argv)
    window = MyWindow()
    window.show()
    sys.exit(app.exec())

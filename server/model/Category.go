package model

type Category struct {
	ID        uint   `json:"id"`
	Name      string `json:"name" gorm:"type:varchar(50);not nulll;unique"`
	CreatedAt Time   `json:"create_at" gorm:"type:timestamp"`
	UpdatedAt Time   `json:"update_at" gorm:"type:timestamp"`
}

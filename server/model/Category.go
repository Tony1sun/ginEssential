package model

import "time"

type Category struct {
	ID        uint      `json:"id"`
	Name      string    `json:"name" gorm:"type:varchar(50);not nulll;unique"`
	CreatedAt time.Time `json:"create_at" gorm:"type:timestamp"`
	UpdatedAt time.Time `json:"update_at" gorm:"type:timestamp"`
}

require "application_system_test_case"

class GarbageItemsTest < ApplicationSystemTestCase
  setup do
    @garbage_item = garbage_items(:one)
  end

  test "visiting the index" do
    visit garbage_items_url
    assert_selector "h1", text: "Garbage Items"
  end

  test "creating a Garbage item" do
    visit garbage_items_url
    click_on "New Garbage Item"

    fill_in "Name", with: @garbage_item.name
    fill_in "Stinkiness", with: @garbage_item.stinkiness
    click_on "Create Garbage item"

    assert_text "Garbage item was successfully created"
    click_on "Back"
  end

  test "updating a Garbage item" do
    visit garbage_items_url
    click_on "Edit", match: :first

    fill_in "Name", with: @garbage_item.name
    fill_in "Stinkiness", with: @garbage_item.stinkiness
    click_on "Update Garbage item"

    assert_text "Garbage item was successfully updated"
    click_on "Back"
  end

  test "destroying a Garbage item" do
    visit garbage_items_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Garbage item was successfully destroyed"
  end
end
